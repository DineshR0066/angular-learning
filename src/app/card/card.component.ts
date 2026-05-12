import { 
  Component, 
  Input, 
  Output, 
  EventEmitter, 
  ViewChild, 
  ElementRef, 
  ContentChild, 
  TemplateRef,
  AfterViewInit,
  AfterContentInit
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements AfterViewInit, AfterContentInit {
  // 1. @Input() - Receiving data
  @Input() title: string = 'Default Title';
  
  // 2. @Output() & EventEmitter - Emitting events
  @Output() selected = new EventEmitter<string>();

  // 3. ngTemplateOutlet - Passing a reusable fragment
  @Input() footerTemplate?: TemplateRef<any>;

  // 4. @ViewChild - Accessing an internal template element
  @ViewChild('headerTitle') headerElement!: ElementRef;

  // 5. @ContentChild - Accessing projected content (ng-content)
  @ContentChild('projectedInfo') projectedContent?: ElementRef;

  selectCard() {
    this.selected.emit(`Selected: ${this.title}`);
  }

  ngAfterViewInit() {
    console.log('ViewChild Header:', this.headerElement.nativeElement.innerText);
    // You can manipulate the internal element here
    this.headerElement.nativeElement.style.color = '#333';
  }

  ngAfterContentInit() {
    if (this.projectedContent) {
      console.log('ContentChild Projected:', this.projectedContent.nativeElement.innerText);
    }
  }
}
