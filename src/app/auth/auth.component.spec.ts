import { TestBed } from "@angular/core/testing"
import { AuthComponent } from "./auth.component"
import { SharedModule } from "../shared/shared.module";
import { AuthService } from "./auth.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { of } from "rxjs";

describe('AuthComponent',()=>{
    let authComponent:AuthComponent;
    let authService:AuthService;
    beforeEach(()=>{
        TestBed.configureTestingModule({
            declarations:[AuthComponent],
            imports:[HttpClientTestingModule,SharedModule],
            providers:[AuthService]
        });

        authComponent=TestBed.createComponent(AuthComponent).componentInstance;
        authService = TestBed.inject(AuthService);
    });
    it('should create auth component',()=>{
        expect(authComponent).toBeTruthy();
    })
    it('Debe marcar todos los campos del form como "touched" si este es invalido',()=>{
        authComponent.login();
        expect(authComponent.loginForm.touched).toBeTrue();
    })
    it('Debe llamar el metodo login del AuthService si el formulario es valid',()=>{
        const spyLogin = spyOn(authService, 'login').and.returnValue(of());
        authComponent.loginForm.patchValue({
            user:'usuario1',
            password:'12345',
        });
        authComponent.login();
        expect(spyLogin).toHaveBeenCalled();
    })
})