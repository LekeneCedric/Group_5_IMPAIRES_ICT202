import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {redirectUnauthorizedTo,redirectLoggedInTo,canActivate} from "@angular/fire/auth-guard"
const redirectUnauthorizedToLogin = ()=>redirectUnauthorizedTo(['']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['home'])
const routes: Routes = [
  
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    ...canActivate(redirectUnauthorizedToLogin)
  },
  
  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    ...canActivate(redirectLoggedInToHome)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'edit-info',
    loadChildren: () => import('./edit-info/edit-info.module').then( m => m.EditInfoPageModule)
  },
  {
    path: 'template',
    loadChildren: () => import('./template/template.module').then( m => m.TemplatePageModule)
  },
  {
    path: 'template1',
    loadChildren: () => import('./template1/template1.module').then( m => m.Template1PageModule)
  },
  {
    path: 'template2',
    loadChildren: () => import('./template2/template2.module').then( m => m.Template2PageModule)
  },
  {
    path: 'template3',
    loadChildren: () => import('./template3/template3.module').then( m => m.Template3PageModule)
  },
  {
    path: 'template4',
    loadChildren: () => import('./template4/template4.module').then( m => m.Template4PageModule)
  },
  {
    path: 'template5',
    loadChildren: () => import('./template5/template5.module').then( m => m.Template5PageModule)
  },
  {
    path: 'scanprofile',
    loadChildren: () => import('./scanprofile/scanprofile.module').then( m => m.ScanprofilePageModule)
  },
  {
    path: 'informations',
    loadChildren: () => import('./informations/informations.module').then( m => m.InformationsPageModule)
  },
  {
    path: 'comptes',
    loadChildren: () => import('./comptes/comptes.module').then( m => m.ComptesPageModule)
  },
  {
    path: 'experiences',
    loadChildren: () => import('./experiences/experiences.module').then( m => m.ExperiencesPageModule)
  },
  {
    path: 'formations',
    loadChildren: () => import('./formations/formations.module').then( m => m.FormationsPageModule)
  },
  {
    path: 'competences',
    loadChildren: () => import('./competences/competences.module').then( m => m.CompetencesPageModule)
  },
  {
    path: 'langues',
    loadChildren: () => import('./langues/langues.module').then( m => m.LanguesPageModule)
  },
  {
    path: 'divertissements',
    loadChildren: () => import('./divertissements/divertissements.module').then( m => m.DivertissementsPageModule)
  },
  {
    path: 'tutoriel',
    loadChildren: () => import('./tutoriel/tutoriel.module').then( m => m.TutorielPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
