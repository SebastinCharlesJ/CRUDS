import { Component } from '@angular/core';
import { AuthService } from '../../../../Core/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CrudsService } from '../../cruds.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {

  UserId:any='';

  constructor(public auth:AuthService,public route:Router,public active:ActivatedRoute,
    public fgbuild:FormBuilder,public service:CrudsService
  ){
    this.UserId = localStorage.getItem("UserId");

    this.AddCakes = this.fgbuild.group({
      userId:new FormControl(this.UserId),
      category:new FormControl(""),
      cakeName:new FormControl(""),
      quantity:new FormControl(""),
      price:new FormControl(""),
    });
  }

  name:any;

  //Category
  Cake:boolean=false;
  Snacks:boolean=false;

  AddCakes!:FormGroup;

  Cakes: string[] = [
    'Plum Cake',
    'Roll Cake',
    'Honey Cake',
    'Plain Cake',
    'Vennila',
    'Chocolate Cake',
    'Black Forest Cake',
    'White Forest Cake'
  ];

  Snack:string[]=[
    'Juice Porri',
    'Veg Puffs',
    'Egg Puffs',
    'Chicken Puffs',
    'Baby Rusk',
    'Maccron',
    'Coconut Biscuits',
    'Tea Rusk'
  ];

  Quantity:any=[
    '100 gm',
    '250 gm',
    '500 gm',
    '750 gm',
    '1 Kg',
    '1',
    '2',
    '3'
  ]

  Pieces:string[]=[
    '1',
    '2',
    '3',
    '4',
    '5',
    '10',
    '12',
  ];

  // cakes: string[] = ['Chocolate Cake', 'Vanilla Cake', 'Strawberry Cake'];
  pieces: number[] = [1, 2, 4, 6, 8, 10];
  selectedCake: string = '';
  selectedSnacks:any = '';
  selectedQuantity: any = 0;
  price: string = '0';
  snacksPrice:string = '0';
  userID:any;


  calculatePrice() {
    // You need to implement the price calculation logic based on the selected cake and quantity
    // For example:
    if (this.selectedCake === 'Plum Cake') {
      this.price = (this.selectedQuantity * 18).toString(); // Price for Chocolate Cake
    }
    else if (this.selectedCake === 'Roll Cake') {
      this.price = (this.selectedQuantity * 16).toString(); // Price for Vanilla Cake
    }
    else if (this.selectedCake === 'Honey Cake') {
      this.price = (this.selectedQuantity * 12).toString(); // Price for Strawberry Cake
    }
    else if (this.selectedCake === 'Plain Cake') {
      this.price = (this.selectedQuantity * 100).toString(); // Price for Strawberry Cake
    }else if (this.selectedCake === 'Vennila') {
      this.price = (this.selectedQuantity * 13).toString(); // Price for Strawberry Cake
    }
    else if (this.selectedCake === 'Chocolate Cake') {
      this.price = (this.selectedQuantity * 30).toString(); // Price for Strawberry Cake
    }
    else if (this.selectedCake === 'Black Forest Cake') {
      this.price = (this.selectedQuantity * 35).toString(); // Price for Strawberry Cake
    }
    else if (this.selectedCake === 'White Forest Cake') {
      this.price = (this.selectedQuantity * 40).toString(); // Price for Strawberry Cake
    }
  }

  //Snacks Selected Price Generate
  calculatePriceforSnacks(){
    if(this.selectedSnacks === "Juice Porri" && this.selectedQuantity === "100 gm"){
      this.snacksPrice = '40';
    }
    else if(this.selectedSnacks === "Juice Porri" && this.selectedQuantity === "250 gm"){
      this.snacksPrice = '100';
    }
    else if(this.selectedSnacks === "Juice Porri" && this.selectedQuantity === "500 gm"){
      this.snacksPrice = '200';
    }
    else if(this.selectedSnacks === "Juice Porri" && this.selectedQuantity === "750 gm"){
      this.snacksPrice = '300';
    }
    else if(this.selectedSnacks === "Juice Porri" && this.selectedQuantity === "1 Kg"){
      this.snacksPrice = '400';
    }
    else if(this.selectedSnacks === "Veg Puffs" && this.selectedQuantity === "1"){
      this.snacksPrice = '15';
    }
    else if(this.selectedSnacks === "Veg Puffs" && this.selectedQuantity === "2"){
      this.snacksPrice = '30';
    }
    else if(this.selectedSnacks === "Veg Puffs" && this.selectedQuantity === "3"){
      this.snacksPrice = '45';
    }
    else if(this.selectedSnacks === "Egg Puffs" && this.selectedQuantity === "1"){
      this.snacksPrice = '19';
    }
    else if(this.selectedSnacks === "Egg Puffs" && this.selectedQuantity === "2"){
      this.snacksPrice = '48';
    }
    else if(this.selectedSnacks === "Egg Puffs" && this.selectedQuantity === "3"){
      this.snacksPrice = '57';
    }
    else if(this.selectedSnacks === "Chicken Puffs" && this.selectedQuantity === "1"){
      this.snacksPrice = '20';
    }
    else if(this.selectedSnacks === "Chicken Puffs" && this.selectedQuantity === "2"){
      this.snacksPrice = '40';
    }
    else if(this.selectedSnacks === "Chicken Puffs" && this.selectedQuantity === "3"){
      this.snacksPrice = '60';
    }
    else if(this.selectedSnacks === "Baby Rusk" && this.selectedQuantity === "100 gm"){
      this.snacksPrice = '30';
    }
    else if(this.selectedSnacks === "Baby Rusk" && this.selectedQuantity === "250 gm"){
      this.snacksPrice = '75';
    }
    else if(this.selectedSnacks === "Baby Rusk" && this.selectedQuantity === "500 gm"){
      this.snacksPrice = '150';
    }
    else if(this.selectedSnacks === "Baby Rusk" && this.selectedQuantity === "750 gm"){
      this.snacksPrice = '225';
    }
    else if(this.selectedSnacks === "Baby Rusk" && this.selectedQuantity === "1 Kg"){
      this.snacksPrice = '300';
    }
    else if(this.selectedSnacks === "Maccron" && this.selectedQuantity === "100 gm"){
      this.snacksPrice = '120';
    }
    else if(this.selectedSnacks === "Maccron" && this.selectedQuantity === "250 gm"){
      this.snacksPrice = '300';
    }
    else if(this.selectedSnacks === "Maccron" && this.selectedQuantity === "500 gm"){
      this.snacksPrice = '600';
    }
    else if(this.selectedSnacks === "Maccron" && this.selectedQuantity === "750 gm"){
      this.snacksPrice = '900';
    }
    else if(this.selectedSnacks === "Maccron" && this.selectedQuantity === "1 Kg"){
      this.snacksPrice = '1200';
    }
    else if(this.selectedSnacks === "Coconut Biscuits" && this.selectedQuantity === "100 gm"){
      this.snacksPrice = '46';
    }
    else if(this.selectedSnacks === "Coconut Biscuits" && this.selectedQuantity === "250 gm"){
      this.snacksPrice = '115';
    }
    else if(this.selectedSnacks === "Coconut Biscuits" && this.selectedQuantity === "500 gm"){
      this.snacksPrice = '230';
    }
    else if(this.selectedSnacks === "Coconut Biscuits" && this.selectedQuantity === "750 gm"){
      this.snacksPrice = '345';
    }
    else if(this.selectedSnacks === "Coconut Biscuits" && this.selectedQuantity === "1 Kg"){
      this.snacksPrice = '460';
    }
    else if(this.selectedSnacks === "Tea Rusk" && this.selectedQuantity === "100 gm"){
      this.snacksPrice = '46';
    }
    else if(this.selectedSnacks === "Tea Rusk" && this.selectedQuantity === "250 gm"){
      this.snacksPrice = '115';
    }
    else if(this.selectedSnacks === "Tea Rusk" && this.selectedQuantity === "500 gm"){
      this.snacksPrice = '230';
    }
    else if(this.selectedSnacks === "Tea Rusk" && this.selectedQuantity === "750 gm"){
      this.snacksPrice = '345';
    }
    else if(this.selectedSnacks === "Tea Rusk" && this.selectedQuantity === "1 Kg"){
      this.snacksPrice = '460';
    }
  }

  //Category Select
selectCake(){
  this.Cake = true;
  this.Snacks = false;

}
selectSnacks(){
  this.Cake = false;
  this.Snacks = true;
}


  logout() {
    if(confirm("Are you sure want to logout?")){
      this.auth.clearStorage();
          this.route.navigate(['/registration'])
    }
  }

  ngOnInit(){
    this.active.params.subscribe(data=>{
      this.userID=data['id'];

      if(this.userID != ''){

        this.service.GetCakeById(this.userID).subscribe((res:any)=>{
          console.log(res[0]);
          this.AddCakes.patchValue({
            userId: res[0].userId,
            category: res[0].category,
            cakeName: res[0].cakeName,
            quantity: res[0].quantity,
            price: res[0].price,
          });

          this.selectedCake = res[0].cakeName;
          this.selectedQuantity = res[0].quantity;
          this.selectedSnacks = res[0].cakeName;
          this.snacksPrice = res[0].price;

          // if (res[0].category === 'Cakes') {
          //   this.Snacks = false;
          // } else if (res[0].category == '"Snacks"') {

          //   this.Snacks = true;
          // }
        });
      }

      })
  }


  UpdateCakes(){
    
  }

}
