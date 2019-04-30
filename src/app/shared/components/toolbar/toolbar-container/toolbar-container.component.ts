import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar-container',
  templateUrl: './toolbar-container.component.html',
  styleUrls: ['./toolbar-container.component.scss']
})
export class ToolbarContainerComponent implements OnInit {
  @Output()
  menuEmitter = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  public openMenu(): void {
    this.menuEmitter.emit();
  }
}
