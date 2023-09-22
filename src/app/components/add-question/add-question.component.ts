import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent {
  @Input() modalRef;
  questionForm = new FormGroup({
    question: new FormControl('', Validators.required),
    typeOfAnswers: new FormControl(true, Validators.required),
    checkBoxAnswers: new FormArray([]),
    isAllow: new FormControl(false, Validators.required),
    isRequired: new FormControl(false, Validators.required),
  })
  constructor(private fb: FormBuilder) { }
  listOfOption = [{
    index: 1,
    answer: ''
  }];
  isparagraph: boolean = true;
  get checkBoxAnswers() {
    return this.questionForm.get('checkBoxAnswers') as FormArray
  }
  changeType(value: boolean) {
    this.isparagraph = value;
    this.questionForm.get("typeOfAnswers").setValue(value);
  }
  addAnotherAnswer() {
    if (this.checkBoxAnswers.length < 5) {
      let tempFC = new FormControl('', Validators.required)
      this.checkBoxAnswers.push(tempFC)
    }
  }
  removeAnswer(index) {
    this.checkBoxAnswers.removeAt(index);
    console.log(this.checkBoxAnswers.value);

    
  }
  save() {
    console.log('1', JSON.stringify(this.questionForm.value));
    this.modalRef.close(JSON.stringify(this.questionForm.value));
  }
  cancel() {
    this.modalRef.close("cancel")
  }
}
