import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})

@Pipe({
    name: 'safeHtml'
})
export class SafeHtmlPipeService implements PipeTransform {

    constructor(private sanitized: DomSanitizer) {}
    transform(value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    }
}