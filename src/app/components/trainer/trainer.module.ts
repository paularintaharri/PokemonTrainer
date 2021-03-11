import { CommonModule } from '@angular/common';
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainerComponent } from './trainer.component';

const routes: Routes = [{
    path: '',
    component: TrainerComponent
}];

@NgModule({
    declarations:[TrainerComponent],
   imports: [ RouterModule.forChild( routes ), CommonModule],
   exports: [ RouterModule ] 
})
export class TrainerModule{ }