import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TERCEROS, Tercero } from '../../core/data';
import { ToastService } from '../../core/toast.service';
import { nf, rutOk } from '../../core/util';
import { Cell, Col, DataTable } from '../../shared/data-table';
import { Icon } from '../../shared/icon';
import { Modal } from '../../shared/modal';
import { PageHeader } from '../../shared/page-header';
import { Estado } from '../../shared/ui';

/** Directorio de contratistas, compradores, laboratorios, fabricantes y operador portuario. */
@Component({
  selector: 'app-terceros',
  templateUrl: './terceros.html',
  imports: [FormsModule, RouterLink, DataTable, Cell, Icon, Modal, PageHeader, Estado],
})
export class Terceros {
  private toast = inject(ToastService);
  readonly nf = nf;
  readonly tipos = ['Contratista', 'Comprador', 'Laboratorio', 'Fabricante', 'Portuario'];
  readonly terceros = signal([...TERCEROS]);
  readonly cols: Col<Tercero>[] = [
    { key: 'nombre', label: 'Nombre' }, { key: 'tipo', label: 'Tipo' }, { key: 'rubro', label: 'Rubro' },
    { key: 'trabajadores', label: 'Personas', num: true }, { key: 'score', label: 'Evaluación', num: true }, { key: 'estado', label: 'Estado' },
  ];
  readonly filtros = [{ key: 'tipo', label: 'Tipo', options: this.tipos }, { key: 'estado', label: 'Estado', options: ['Vigente', 'Con observaciones'] }];

  nuevo = false;
  n = { nombre: '', rut: '', tipo: 'Contratista' };
  readonly err = signal<Record<string, string>>({});

  abrir() { this.nuevo = true; this.n = { nombre: '', rut: '', tipo: 'Contratista' }; this.err.set({}); }
  crear() {
    const e: Record<string, string> = {};
    const nom = this.n.nombre.trim();
    if (!nom) e['nombre'] = 'Este campo es obligatorio.'; else if (nom.length < 3) e['nombre'] = 'Mínimo 3 caracteres.';
    if (!this.n.rut.trim()) e['rut'] = 'Este campo es obligatorio.'; else if (!rutOk(this.n.rut)) e['rut'] = 'RUT inválido: revisa el dígito verificador (ej. 76.123.456-K).';
    this.err.set(e);
    if (Object.keys(e).length) return;
    TERCEROS.unshift({ id: 'T-' + (2000 + TERCEROS.length), nombre: nom, rut: this.n.rut, tipo: this.n.tipo, rubro: 'Por completar', trabajadores: 0, score: 70, estado: 'Vigente' });
    this.terceros.set([...TERCEROS]);
    this.nuevo = false;
    this.toast.show('Tercero creado. Complétalo desde su ficha.', 'ok');
  }
}
