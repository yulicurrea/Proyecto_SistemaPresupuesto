import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Categoria } from 'src/app/interfaces/Categoria';
import { CategoriaService } from 'src/app/services/presupuesto/categoria.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  displayedColumns: string[] = ['id', 'categoria'];
  categoriaForm!: FormGroup;
  categorias: Categoria[] = [];
  cat: any;

  constructor(public fb: FormBuilder,
    public categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.categoriaForm = this.fb.group({
      categoria: ['', Validators.required]
    });;
  }
  guardar(): void {
    this.categoriaService.guardar(this.categoriaForm.value).subscribe(resp => {
      this.categoriaForm.reset();
      this.cat = this.cat.filter((categ: { id: any; }) => resp.id == categ.id);
      this.cat.push(resp);
    }
    );
  }
}
