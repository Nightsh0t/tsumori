import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss']
})
export class BuilderComponent implements OnInit {
  /* Freshman, Sophmore, Junior, Senior */
  public grade: number;

  public freshmenClasses = {
    "core": {
      /* Core Classes */
      // English
      "english": [
                  "English I", 
                  "English I Honors", 
                  "English I (IEP)"
                 ],

      // Social Studies
      "ss":      [
                  "World History", 
                  "World History Honors", 
                  "Word History (IEP)"
                 ],

      // AP World Studies
      // If apws is selected hide english and social studies
      "apws": "English 1 Advanced Honors & AP World Studies",

      // Science
      "science": [
                  "Physical Science IEP", 
                  "Physcial Science Standard", 
                  "Biology Honors", 
                  "Agriscience (pre-req for ag courses)", 
                  "Agriscience Honors"
                 ],

      // Math
      "math":    [
                  "Math Intervention (Foundations 2) (IEP) & Algebra 1A (IEP)", 
                  "Algebra 1A & Algebra 1B", 
                  "Algebra 1 Honors & (optional) Algebra 2 Advanced Honors"
                 ],

      // Physical Education
      // Two units of JROTC will take the place of the state mandated Wellness class; hide Wellness when both JROTC units are selected.
      "pe":      [
                  "Wellness",
                  "JROTC (Fall)",
                  "JROTC (Spring)"
                 ]
    },
    /* Elective Classes */
    "elective": {

    }
  };
  

  private sophmoreClasses = {};
  private juniorClasses   = {};
  private seniorClasses   = {};

  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle("Tsumori » Builder");
    console.log(this.freshmenClasses.core.english);
  }

  /* Display available classes based on grade and previously taken classes */
  public displayClasses() {
    if (this.grade == 9) {

    } else if (this.grade == 10) {
      
    } else if (this.grade == 11) {

    } else if (this.grade == 12) {
      
    } else {
      return;
    }
  }

  
  



}
