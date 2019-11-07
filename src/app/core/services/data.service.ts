import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { throwError, BehaviorSubject } from "rxjs";
import { catchError } from "rxjs/operators";
import { environment } from "./../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class DataService {
  public segments = new BehaviorSubject<any>([]);

  activeState: string;
  constructor(private http: HttpClient) {
    // this.getSegments()
    // this.getAdmissionSegment().subscribe(data => this.admission.next(data))
    // this.getSpecialSegments().subscribe(data => this.special.next(data))
    // this.getSkillSegments().subscribe(data => this.skill.next(data))
  }

  //// Class service

  getAllBooks() {
    return this.http.get(`${environment.api_url}books`);
  }

  getBookByCategoryId(cat_id) {
    return this.http.get(`${environment.api_url}books/category/${cat_id}`);
  }


  private handleError(errorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error("Client Side error " + errorResponse.error.message);
    } else {
      console.error("Server Side error " + errorResponse.error.message);
    }

    return throwError("There is a problem in loading data.");
  }

  convertToJson(value: any) {
    value = value.split("\n");

    var attrs = value.splice(0, 1);

    var result = value.map(function (row) {
      var obj = {};
      var rowData = row.split(",");
      attrs[0].split(",").forEach(function (val, idx) {
        obj = constructObj(val, obj, rowData[idx]);
      });
      return obj;
    });

    function constructObj(str, parentObj, data) {
      if (str.split("//").length === 1) {
        parentObj[str] = data;
        return parentObj;
      }

      var curKey = str.split("//")[0];
      if (!parentObj[curKey]) parentObj[curKey] = {};
      parentObj[curKey] = constructObj(
        str
          .split("//")
          .slice(1)
          .join("//"),
        parentObj[curKey],
        data
      );
      return parentObj;
    }

    return result;
  }

  objectToUrl(obj) {
    var str = [];
    for (var p in obj)
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    return str.join("&");
  }
}
