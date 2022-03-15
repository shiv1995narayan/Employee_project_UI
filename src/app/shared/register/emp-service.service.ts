import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {

  constructor(private http: HttpClient) { }

  sendDateTODatabase(formData: FormData):Observable<any>{

      return this.http.post('http://localhost:8081/insert',formData);

  }
  sendDateTODatabaseUpdate(formData: FormData):Observable<any>{

    return this.http.post('http://localhost:8081/update',formData);

}
  getAllEmployees()
  {
    return this.http.get('http://localhost:8081/getAllEmployees');
  }
  deleteEmployee(id)
  {
    return this.http.delete('http://localhost:8081/delete/'+id);
  }
}
