
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'Titlecase'
})
export class TitleCasePipe implements PipeTransform{
 
    transform(a:string)
    {
      let flag:boolean=true;
      let s:string[]=Array.from(a);
      for(let i=0;i<s.length;i++)
      {
           if(s[i]===' ')
           {
                 flag=true;
                 continue;
           }
           if(flag==true)
           {
              if(a.charCodeAt(i)>=97&& a.charCodeAt(i)<=122)
              {
                    s[i]=s[i].toUpperCase();
              }
              flag=false;
           }
           else
           {
              if(a.charCodeAt(i)>=65&&a.charCodeAt(i)<=90)
              {
                  s[i]=s[i].toLowerCase();
              }
           }
           
      }
      return s.join('')
    }
}