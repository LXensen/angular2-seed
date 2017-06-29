import { POC } from './poc.model';
import { PocService } from './poc.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';

@Component({
  selector: 'app-poc',
  templateUrl: './poc.component.html',
  styleUrls: ['./poc.component.css']
})
export class PocComponent implements OnInit {
  pocs: POC[];
  frm: FormGroup;

  constructor(private pocService: PocService,
              private fb: FormBuilder) {
    this.CreateForm();
  }

  ngOnInit() {
  }

  private CreateForm() {
    this.frm = this.fb.group({
      name: ['', [Validators.required]]
    });
  }

  onSubmit() {
    console.log(this.frm.value.name);
    const _poc = new POC(this.frm.value.name, 'abcdef123');
    console.log(_poc.name);
    this.pocService.addPOC(_poc)
        .subscribe(
          data => console.log(data),
          error => console.log(error)
        );

  }

private SuccessAddPOC() {

}

private ErrorAddPOC() {

}
  onSelectPOC() {
    this.pocService.getPOCs()
      .subscribe(
        poc => {
          console.log(poc);
          this.pocs = poc;
        }
      );
  }

}
