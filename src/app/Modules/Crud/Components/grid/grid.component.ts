import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../../Core/services/auth.service';
import { EventService } from '../../../../Core/services/event.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CrudsService } from '../../cruds.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

export interface PeriodicElement
{
  id:Int32Array;
  UserId:Int32Array;
  Category:string;
  CakeName:string;
  Quantity:string;
  Price:string;
}


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})
export class GridComponent {

  tableSizes: any = [5, 10, 15, 20];
  userId:any='';
  name:any;

  //Category
  Cake:boolean=false;
  Snacks:boolean=false;
  selectedOption!:string

  AddCakes!:FormGroup;
  EditCakesList!:FormGroup;

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
  EselectedCake: string = '';
  selectedSnacks:string = '';
  EselectedSnacks:string = '';
  selectedQuantity: any = 0;
  EselectedQuantity: any = 0;
  price: string = '0';
  Eprice: string = '0';
  snacksPrice:string = '0';
  EsnacksPrice:string = '0';


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

  EcalculatePrice() {
    // You need to implement the price calculation logic based on the selected cake and quantity
    // For example:
    if (this.EselectedCake === 'Plum Cake') {
      this.Eprice = (this.EselectedQuantity * 18).toString(); // Price for Chocolate Cake
    }
    else if (this.EselectedCake === 'Roll Cake') {
      this.Eprice = (this.EselectedQuantity * 16).toString(); // Price for Vanilla Cake
    }
    else if (this.EselectedCake === 'Honey Cake') {
      this.Eprice = (this.EselectedQuantity * 12).toString(); // Price for Strawberry Cake
    }
    else if (this.EselectedCake === 'Plain Cake') {
      this.Eprice = (this.EselectedQuantity * 100).toString(); // Price for Strawberry Cake
    }else if (this.EselectedCake === 'Vennila') {
      this.Eprice = (this.EselectedQuantity * 13).toString(); // Price for Strawberry Cake
    }
    else if (this.EselectedCake === 'Chocolate Cake') {
      this.Eprice = (this.EselectedQuantity * 30).toString(); // Price for Strawberry Cake
    }
    else if (this.EselectedCake === 'Black Forest Cake') {
      this.Eprice = (this.EselectedQuantity * 35).toString(); // Price for Strawberry Cake
    }
    else if (this.EselectedCake === 'White Forest Cake') {
      this.Eprice = (this.EselectedQuantity * 40).toString(); // Price for Strawberry Cake
    }
  }

  EcalculatePriceforSnacks(){
    if(this.EselectedSnacks === "Juice Porri" && this.EselectedQuantity === "100 gm"){
      this.EsnacksPrice = '40';
    }
    else if(this.EselectedSnacks === "Juice Porri" && this.EselectedQuantity === "250 gm"){
      this.EsnacksPrice = '100';
    }
    else if(this.EselectedSnacks === "Juice Porri" && this.EselectedQuantity === "500 gm"){
      this.EsnacksPrice = '200';
    }
    else if(this.EselectedSnacks === "Juice Porri" && this.EselectedQuantity === "750 gm"){
      this.EsnacksPrice = '300';
    }
    else if(this.EselectedSnacks === "Juice Porri" && this.EselectedQuantity === "1 Kg"){
      this.EsnacksPrice = '400';
    }
    else if(this.EselectedSnacks === "Veg Puffs" && this.EselectedQuantity === "1"){
      this.EsnacksPrice = '15';
    }
    else if(this.EselectedSnacks === "Veg Puffs" && this.EselectedQuantity === "2"){
      this.EsnacksPrice = '30';
    }
    else if(this.EselectedSnacks === "Veg Puffs" && this.EselectedQuantity === "3"){
      this.EsnacksPrice = '45';
    }
    else if(this.EselectedSnacks === "Egg Puffs" && this.EselectedQuantity === "1"){
      this.EsnacksPrice = '19';
    }
    else if(this.EselectedSnacks === "Egg Puffs" && this.EselectedQuantity === "2"){
      this.EsnacksPrice = '48';
    }
    else if(this.EselectedSnacks === "Egg Puffs" && this.EselectedQuantity === "3"){
      this.EsnacksPrice = '57';
    }
    else if(this.EselectedSnacks === "Chicken Puffs" && this.EselectedQuantity === "1"){
      this.EsnacksPrice = '20';
    }
    else if(this.EselectedSnacks === "Chicken Puffs" && this.EselectedQuantity === "2"){
      this.EsnacksPrice = '40';
    }
    else if(this.EselectedSnacks === "Chicken Puffs" && this.EselectedQuantity === "3"){
      this.EsnacksPrice = '60';
    }
    else if(this.EselectedSnacks === "Baby Rusk" && this.EselectedQuantity === "100 gm"){
      this.EsnacksPrice = '30';
    }
    else if(this.EselectedSnacks === "Baby Rusk" && this.EselectedQuantity === "250 gm"){
      this.EsnacksPrice = '75';
    }
    else if(this.EselectedSnacks === "Baby Rusk" && this.EselectedQuantity === "500 gm"){
      this.EsnacksPrice = '150';
    }
    else if(this.EselectedSnacks === "Baby Rusk" && this.EselectedQuantity === "750 gm"){
      this.EsnacksPrice = '225';
    }
    else if(this.EselectedSnacks === "Baby Rusk" && this.EselectedQuantity === "1 Kg"){
      this.EsnacksPrice = '300';
    }
    else if(this.EselectedSnacks === "Maccron" && this.EselectedQuantity === "100 gm"){
      this.EsnacksPrice = '120';
    }
    else if(this.EselectedSnacks === "Maccron" && this.EselectedQuantity === "250 gm"){
      this.EsnacksPrice = '300';
    }
    else if(this.EselectedSnacks === "Maccron" && this.EselectedQuantity === "500 gm"){
      this.EsnacksPrice = '600';
    }
    else if(this.EselectedSnacks === "Maccron" && this.EselectedQuantity === "750 gm"){
      this.EsnacksPrice = '900';
    }
    else if(this.EselectedSnacks === "Maccron" && this.EselectedQuantity === "1 Kg"){
      this.EsnacksPrice = '1200';
    }
    else if(this.EselectedSnacks === "Coconut Biscuits" && this.EselectedQuantity === "100 gm"){
      this.EsnacksPrice = '46';
    }
    else if(this.EselectedSnacks === "Coconut Biscuits" && this.EselectedQuantity === "250 gm"){
      this.EsnacksPrice = '115';
    }
    else if(this.EselectedSnacks === "Coconut Biscuits" && this.EselectedQuantity === "500 gm"){
      this.EsnacksPrice = '230';
    }
    else if(this.EselectedSnacks === "Coconut Biscuits" && this.EselectedQuantity === "750 gm"){
      this.EsnacksPrice = '345';
    }
    else if(this.EselectedSnacks === "Coconut Biscuits" && this.EselectedQuantity === "1 Kg"){
      this.EsnacksPrice = '460';
    }
    else if(this.EselectedSnacks === "Tea Rusk" && this.EselectedQuantity === "100 gm"){
      this.EsnacksPrice = '46';
    }
    else if(this.EselectedSnacks === "Tea Rusk" && this.EselectedQuantity === "250 gm"){
      this.EsnacksPrice = '115';
    }
    else if(this.EselectedSnacks === "Tea Rusk" && this.EselectedQuantity === "500 gm"){
      this.EsnacksPrice = '230';
    }
    else if(this.EselectedSnacks === "Tea Rusk" && this.EselectedQuantity === "750 gm"){
      this.EsnacksPrice = '345';
    }
    else if(this.EselectedSnacks === "Tea Rusk" && this.EselectedQuantity === "1 Kg"){
      this.EsnacksPrice = '460';
    }
  }


  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  public displayedColumns: string[] = ['id','Category','Name','Quantity','Price','UserId','Options'];
  public dataSource = new MatTableDataSource<PeriodicElement>();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();


  }
  filterData(event:any){ }

  constructor(public service:CrudsService,public route:Router,public auth:AuthService,
    public fgbuild:FormBuilder
  ){

    this.name = localStorage.getItem("UserName");
    this.userId = localStorage.getItem("UserId");
    this.service.getCakeListById(this.userId).subscribe((res:any)=>{
      this.dataSource.data=res;
      console.log(res);
      console.log(this.userId);

    })

    this.AddCakes = this.fgbuild.group({
      userId:new FormControl(this.userId),
      category:new FormControl(""),
      cakeName:new FormControl(""),
      quantity:new FormControl(""),
      price:new FormControl(""),
    });

    this.EditCakesList = this.fgbuild.group({
      EUserId:new FormControl(this.userId),
      Ecategory:new FormControl(""),
      EcakeName:new FormControl(""),
      Equantity:new FormControl(""),
      Eprice:new FormControl(""),
    });

    this.EditCakes(this.CakeId);

  }

  //Insert Cakes
  SaveCakes(){
    try{

       this.service.InsertCakes(this.AddCakes.value).subscribe((res)=>{
          alert("Added Successfully");
          this.getdata();
          window.location.reload();
       })
    }
    catch(Exception){
      throw Exception;
    }
  }

  CakeId:any;
  //Get Cake By Id
  EditCakes(Id:any){
    this.CakeId = Id;
    console.log(Id);
    this.selectCake();
    this.selectSnacks();

    this.service.GetCakeById(Id).subscribe((res:any)=>{
      console.log(res[0]);

     this.EditCakesList=this.fgbuild.group({
      EUserId:new FormControl(res[0].userId),
      Ecategory:new FormControl(res[0].category),
      EcakeName:new FormControl(res[0].cakeName),
      Equantity:new FormControl(res[0].quantity),
      Eprice:new FormControl(res[0].price),
     })
     this.selectedCake = res[0].cakeName;
          this.selectedQuantity = res[0].quantity;
          this.selectedSnacks = res[0].cakeName;
          this.price = res[0].price;
          this.snacksPrice = res[0].price;
    })
  }

  data:any={
    Category:'',
    CakeName:'',
    Quantity:'',
    UserId:0,
    Price:''
  }

  //Update Cakes
  UpdateCakes(){

    this.data.UserId=this.userId;
    this.data.Category=this.EditCakesList.value.Ecategory;
    this.data.CakeName=this.EditCakesList.value.EcakeName;
    this.data.Quantity=this.EditCakesList.value.Equantity;
    this.data.Price=this.EditCakesList.value.Eprice;

    this.service.UpdateCakeList(this.CakeId,this.data).subscribe((res)=>{
      console.log(res);

      alert("Update Successfully");
      this.getdata();
      window.location.reload();
    }
  )
  }


getdata()
{
  this.service.getCakeListById(this.userId).subscribe((res:any)=>{
  this.dataSource.data=res;
 })
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

//Delete Cake
deleteCake(Id:any){
  if(confirm("Are you sure Want to Delete this Cake?")){
    this.service.DeleteCake(Id).subscribe((res:any)=>{
      alert("Data Deleted Successfully");
      this.getdata();
      window.location.reload();
    })
  }
}


logout() {
  if(confirm("Are you sure want to logout?")){
    this.auth.clearStorage();
        this.route.navigate(['/registration'])
  }
}

}
