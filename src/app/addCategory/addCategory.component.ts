import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoryService } from 'app/services/categoryService';
import { Observable } from 'rxjs';


export  class Category{
  id: number;
  category: string;
  count: number;

}
const CategoryData: Category[]=[

  { id: 1, category: 'Personal',count: 0},
  { id: 2, category: 'EMI', count: 3 },
  { id: 3, category: 'Others', count: 2 },
];


@Component({
  selector: 'app-addCategory',
  templateUrl: './addCategory.component.html',
  styleUrls: ['./addCategory.component.css']
})
export class AddCategoryComponent implements OnInit {

  categoryForm!: FormGroup;
  isLoadingResults = false;
  isView!: boolean;
  _id: any;
  categoryId: any; 
  categoryDetails: any;
  pageTitle = "Category"
  department: any; 
  isDataSaving: boolean = false;

  Category: Observable<Category[]> | undefined;

 
  constructor(
    public _categoryService: CategoryService,
    public matDialogRef: MatDialogRef<AddCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public _data: any,

  ) {  
    
    this.categoryId = _data.id;
  
     if (this.categoryId === undefined) {
      this.categoryId = '';
     }

    this.createCategoryForm();}

    createCategoryForm(): void {
      this.categoryForm = new FormGroup({
        id: new FormControl('0'),
        Category: new FormControl(''),
        count : new FormControl('0')
        
      });  
    }
  

  ngOnInit(): void {
    
  }
 
  reloadCurrentPage() {
    window.location.reload();
   }
  onCancel(): void {
    this.closeDialog(false);
  }

  onSubmit(): void {
    // if (this.disableSubmitButton() === true) {
    //   return;
    // }
    this.isDataSaving = true;
    const formData = this.categoryForm.value;
    console.log("date",this.categoryForm.value)
    

    if (this.categoryId !== '') {
      this._categoryService

        .updateCategoryDetails(this.categoryId, formData)
        .subscribe((res) => {

         

          this.isDataSaving = false;
          this.closeDialog(true);
          //this.reloadCurrentPage()
        });

        console.log(formData)
      
    }
    else {

      this._categoryService

        .saveCategory(formData)
        .subscribe((res) => {

          this.isDataSaving = false;
          this.closeDialog(true);
          this.reloadCurrentPage()
        });
    }

  }
   
  closeDialog(withUpjoiningDate: boolean) {
    this.matDialogRef.close(withUpjoiningDate);
  }
   
 
}
