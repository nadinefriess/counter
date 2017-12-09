import { Component } from '@angular/core';
import { store } from '../app/app.store';
import { from } from 'rxjs/observable/from';
import { select } from 'ng2-redux';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Counter';
  @select() count$;

  onClickPlus(){
    store.dispatch({type: 'INCREMENT'});
  }

  onClickMinus(){
    store.dispatch({type: 'DECREMENT'});
  }
}
