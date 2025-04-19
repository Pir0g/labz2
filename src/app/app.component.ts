import { Component, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
  greeting = "";
  title = 'digital-department-application';
  ngOnChanges(changes: SimpleChanges) : void{
    if(changes['greeting'] || changes['greetingChange'])
    {
      console.log("Объект изменился");
    }
  }
  ngOnInit(): void {
    console.log("Объект был создан");
  }
  ngDoCheck(): void{
    console.log("Объект проверен");
  }
  ngAfterContentInit(): void{
    console.log("Объект вставлен в html-код");
  }
  ngAfterContentChecked(): void {
    console.log("Проверка изменений содержимого");
  }
  ngAfterViewInit(): void {
    console.log("Инициализация представлений");
  }
  ngAfterViewChecked(): void {
    console.log("Полная проверка объекта завершена");
  }
  ngOnDestroy(): void {
    console.log("Объект удалён");
  }
  sayHi() : void{
    alert("Привет, " + this.greeting);
  }
}
