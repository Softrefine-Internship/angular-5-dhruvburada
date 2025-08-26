import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class DataService {
    getData() {
        return new Observable<number[]>(observer => {
            observer.next([1, 2, 3, 4, 5]);
            observer.complete();
        }
        )
    }
}