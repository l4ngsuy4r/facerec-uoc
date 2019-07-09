import { Component, HostBinding, Input } from '@angular/core'
import { coerceBooleanProperty } from '@angular/cdk/coercion'

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent {
  @Input() title: string
  @Input() image: string

  private _reverse: boolean

  get reverse (): boolean {
    return this._reverse
  }

  @Input()
  set reverse (value: boolean) {
    this._reverse = coerceBooleanProperty(value)
  }

  @HostBinding('style.flex-flow')
  get flexFlow (): string {
    return 'row' + (this.reverse ? '-reverse' : '') + ' nowrap'
  }
}
