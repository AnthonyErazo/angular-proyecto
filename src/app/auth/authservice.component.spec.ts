import { TestBed } from "@angular/core/testing"
import { AuthComponent } from "./auth.component"
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AuthService } from "./auth.service";
import { User } from "./models/authmodels";
import { environment } from "../environments/environments.local";
import { MockProvider } from "ng-mocks";
import { Router } from "@angular/router";

describe('AuthService',()=>{
    let authService:AuthService;
    let httpController:HttpTestingController;
    beforeEach(()=>{
        TestBed.configureTestingModule({
            declarations:[AuthComponent],
            imports:[HttpClientTestingModule,RouterTestingModule],
            providers:[
                MockProvider(Router)
            ]
        });
        authService=TestBed.inject(AuthService);
        httpController=TestBed.inject(HttpTestingController);
    });
    it('AuthService should be defined',()=>{
        expect(authService).toBeTruthy();
    })
    it('Debe establecer un usuario autenticado al hacer login()',()=>{
        const USER_MOCK:User={
            id:1,
            usuario:'usuario1',
            password:'12345',
            token:'dsafdsgjbfebofesfesfsfs734t32'
        }
        authService.login({
            user: USER_MOCK.usuario,
            password: USER_MOCK.password
        }).subscribe(() => {
            authService.authUser$.subscribe({
                next: (authUser) => {
                    expect(authUser).toBeTruthy();
                }
            });
        });
    
        const req = httpController.expectOne({
            method: 'GET',
            url: `${environment.baseUrl}/users?usuario=${USER_MOCK.usuario}&password=${USER_MOCK.password}`
        });
    
        req.flush([USER_MOCK]);
        httpController.verify();
    })
})