import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    providers: [UserService]
})
export class HomeComponent implements OnInit {
    public title: string;
    public identity;

    constructor(
        private _userService: UserService
    ) {
        this.title = 'Welcome';
    }

    ngOnInit() {
        console.log('[OK] Component: home.');
        this.identity = this._userService.getIdentity();
    }

    onSubmit() {
    }
}
