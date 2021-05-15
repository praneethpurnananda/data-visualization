import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'app-formly',
  templateUrl: './formly.component.html',
  styleUrls: ['./formly.component.css']
})
export class FormlyComponent implements OnInit {

  demoForm = new FormGroup({});

  //define our form model
  myFormModel = {
    tageName: '', //empty string
    color: 'Red', //prepopulated value or default value
    quantity: 1, //numerical value
    size: 'M', //single char
    terms: false //boolean value
  };

  //field configurations
  myFormFields: FormlyFieldConfig[] = [
    {
      //first filed
      key: 'tageName',
      type: 'input',
      //template options
      templateOptions: {
        type: 'text',
        label: 'Tag Name',
        placeholder: 'Write your Tag name here',
        required: true
      },
      //validations
      validation: {
        messages: {
          maxLength: 'Should not exceed 20 characters!'
        }
      },
      validators: {
        //input to only 20 characters
        maxLength: ({ value }) => {
          return value.length <= 20;
        }
      }
    },
    {
      key: 'color',
      type: 'select',
      templateOptions: {
          label: 'Color Name',
          options: [
            {label: 'Red color' , value: 'Red'},
            {label: 'Black color' , value: 'Black'},
            {label: 'Blue color' , value: 'Blue'}
          ]
      }
    },
    {
      key: 'quantity',
      type: 'input',
      templateOptions: {
        type: 'number',
        label: 'Enter quantity of the product!',
        placeholder: '4',
        required: true
      }
    },
    {
      key: 'size',
      type: 'select',
      defaultValue: 'M',
      templateOptions: {
        label: 'Size',
        options: [
          {label: 'Small' , value: 'S'},
          {label: 'Medium' , value: 'M'},
          {label: 'Large' , value: 'L'}
        ]
      }
    },
    {
      key: 'terms',
      type: 'checkbox',
      templateOptions: {
        label: 'Please accept Terms and Conditions!',
        required: true
      }
    }
  ];

  onSubmit(model){
    console.log(JSON.stringify(model));
  }
  constructor() { }

  ngOnInit(): void {
  }

}
