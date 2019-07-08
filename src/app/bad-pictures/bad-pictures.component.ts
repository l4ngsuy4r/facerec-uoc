import { Component, Inject, OnInit } from '@angular/core'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material'

@Component({
  selector: 'app-bad-pictures',
  templateUrl: './bad-pictures.component.html',
  styleUrls: ['./bad-pictures.component.css']
})
export class BadPicturesComponent implements OnInit {
  constructor (
    public dialogRef: MatDialogRef<BadPicturesComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  ngOnInit () {}
}
