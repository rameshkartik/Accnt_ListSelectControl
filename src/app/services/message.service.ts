import {Injectable} from '@angular/core';
import {Observable,Subject, Observer} from 'rxjs';
import { ListItem } from '../model/listitem';


@Injectable({providedIn: "root"})
export class MessageService {
    private subject = new Subject<any>();
    listItem :ListItem[];

    constructor() {
        
    }
    sendMessage(message:string){
        this.subject.next({text:message});
    }

    selectedListItem(item:ListItem) {
        this.subject.next({item});
    }

    clearMessage(message:string){
        this.subject.next();
    }

    getMessage():Observable<any> {
        return this.subject.asObservable();
    }

    populateListItem() {
        return this.listItem = [{id:1,description:"Vehicle1"},{id:2,description:"Vehicle2"}];
    }

}