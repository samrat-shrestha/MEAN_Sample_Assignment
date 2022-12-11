import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MongoService } from '../../Service/mongo.service';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-my-beers',
  templateUrl: './my-beers.component.html',
  styleUrls: ['./my-beers.component.css']
})
export class MyBeersComponent {
  beerForm: FormGroup;

  private _success = new Subject<string>();

	staticAlertClosed = false;
	successMessage = '';

	@ViewChild('staticAlert', { static: false }) staticAlert: NgbAlert;
	@ViewChild('selfClosingAlert', { static: false }) selfClosingAlert: NgbAlert;


  Beer:any = [];
  constructor(private formBuilder: FormBuilder, private mongoService: MongoService){}

  ngOnInit() {
    //Add User form validations
    this.beerForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    genre: ['', [Validators.required]],
    description: ['', [Validators.required]],
    });

    this.mongoService.getBeers().subscribe((data) => {
      this.Beer = data;
      console.log(this.Beer);
    });

    this._success.subscribe((message) => (this.successMessage = message));
		this._success.pipe(debounceTime(2000)).subscribe(() => {
			if (this.selfClosingAlert) {
				this.selfClosingAlert.close();
			}
		});
  }

  onSubmit(){
    console.log(this.beerForm.value.name);
    console.log(this.beerForm.value.genre);
    console.log(this.beerForm.value.description);
    let data = {
      name:this.beerForm.value.name,
      genre : this.beerForm.value.genre,
      description: this.beerForm.value.description,
      imagePath : '../../../../assets/images/houzz.png'
    };
    return this.mongoService.createBeer(data).subscribe({
      complete: () => {
        console.log('Beer added!');
        this._success.next("Beer Added Successfully!!");
        this.ngOnInit();
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
}
