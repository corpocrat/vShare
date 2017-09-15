import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { AuthService } from '../auth/auth.service';
import { User } from '../../models/user';

@Injectable()
export class UserService {
    constructor(
        private http: Http,
        private authService: AuthService) {
    }

    getUsers(): Observable<User[]> {
        // add authorization header with jwt token
        const headers = new Headers({ 'Authorization': 'Bearer ' + this.authService.token });
        const options = new RequestOptions({ headers: headers });

        // get users from api
        return this.http.get('/api/users', options)
            .map((response: Response) => response.json());
    }
}
