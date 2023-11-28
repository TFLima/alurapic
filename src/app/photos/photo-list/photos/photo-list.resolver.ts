import { Injectable } from "@angular/core";
import { PhotoService } from "../../photo/photo.service";

@Injectable({providedIn: 'root'})
export class PhotoListResolver {

    constructor(private service: PhotoService){}
}