import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddQuestionComponent } from 'src/app/components/add-question/add-question.component';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  questionArray = []
  answersFormArray = new FormGroup({
    answers: this.fb.array([])

  })
  closeResult = '';
  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal
  ) {

  }
  get answers() {
    return this.answersFormArray.get('answers') as FormArray
  }
  addQuestion() {
    const modalRef = this.modalService.open(AddQuestionComponent)
    modalRef.componentInstance.modalRef = modalRef;
    modalRef.result.then((result) => {
      if (result !== 'cancel') {
        let objectResult = JSON.parse(result)
        this.questionArray.push(objectResult);
        let tempFormGroup = this.fb.group({
          question: new FormControl(objectResult.question, Validators.required),
          answer: new FormControl(''),
          typeOfAnswers: new FormControl(objectResult.typeOfAnswers, Validators.required),
          checkBoxAnswers: new FormArray(objectResult.checkBoxAnswers),
          checkBoxchecked: new FormControl([]),
          isAllow: new FormControl(objectResult.isAllow, Validators.required),
          checkboxTextAnswers: new FormControl(''),
          isRequired: new FormControl(objectResult.isRequired, Validators.required),
        })
        if (!objectResult.typeOfAnswers) {
          let tempCheckBoxAnswersValue = []
          objectResult.checkBoxAnswers.forEach(() => {
            tempCheckBoxAnswersValue.push(false);
          })
          tempFormGroup.get('checkBoxchecked').setValue(tempCheckBoxAnswersValue) ;
        }
        this.answers.push(tempFormGroup);

      }
    },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        console.log(this.closeResult);
      },);
  }
  reviewAnswers() {
    console.log(this.answersFormArray.value)
  }
  getAsFormControl(each, value) {
    return each.get(value) as FormControl;
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
