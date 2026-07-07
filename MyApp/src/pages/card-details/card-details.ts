import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item';
import { Injectable } from '@angular/core';
import Plotly from "plotly.js-basic-dist-min";
// import { createClient } from '@supabase/supabase-js';

/**
 * Generated class for the CardDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-card-details',
  templateUrl: 'card-details.html',
  })
@Injectable()
export class CardDetailsPage {
  item: Item;
  trace: any;
  layout: any;
  fetchDataFromTable: any;
  fetchThisCardDataFromTable: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams['data'].item;
  
    const dates = ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01'];
    const values = [100, 150, 200, 180];

    // // Initialize Supabase client
    // const supabaseUrl = "https://daxyatugamsbbmdcrcnr.supabase.co"; // Replace with your Supabase URL
    // const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRheHlhdHVnYW1zYmJtZGNyY25yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3MTU5NDgsImV4cCI6MjAyNjI5MTk0OH0.w5q3-bbXNM6QlO1roRlZVKPkLKNXT0onQ8PcTHdbp64'; // Replace with your Supabase API key
    // const supabase = createClient(supabaseUrl, supabaseKey);
    // 
    // // Function to fetch data from a table
    // async function fetchDataFromTable() {
    //   try {
    //     // Replace 'YOUR_TABLE_NAME' with the name of your table
    //     const { data, error } = await supabase.from('users').select('*');
    //     if (error) {
    //       throw error;
    //     }
    //     console.log('Data from table:', data);
    //     return data;
    //   } catch (error) {
    //     console.error('Error fetching data:', error.message);
    //     return null;
    //   }
    // }
    // this.fetchDataFromTable = fetchDataFromTable;
    // 
    // // Function to fetch data from a table
    // async function fetchThisCardDataFromTable() {
    //   try {
    //     // Replace 'YOUR_TABLE_NAME' with the name of your table
    //     const { data, error } = await supabase.from('cards').select('*').eq('tcg_id', this.item.tcg_id);
    //     if (error) {
    //       throw error;
    //     }
    //     console.log('Data from table:', data);
    //     return data;
    //   } catch (error) {
    //     console.error('Error fetching data:', error.message);
    //     return null;
    //   }
    // }
    // this.fetchThisCardDataFromTable = fetchThisCardDataFromTable;

    // Create a trace for the data
    this.trace = {
      x: dates,
      y: values,
      type: 'scatter',
      mode: 'lines+markers',
      marker: { size: 8 },
      line: { shape: 'spline' },
      name: 'Historical Data'
    };

    // Create layout for the plot
    this.layout = {
      title: 'Historical Plot Over Time',
      xaxis: {
        title: 'Time'
      },
      yaxis: {
        title: 'Values'
      }
    };

    // fetchDataFromTable();
    
  }
  
  ionViewDidLoad() {
    console.log(this.item);
    console.log('ionViewDidLoad CardDetailsPage');
    console.log(this);

    var TESTER = document.getElementById('plot');
    Plotly.newPlot(TESTER, [this.trace], this.layout);
  }
}
