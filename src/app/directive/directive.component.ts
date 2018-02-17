import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
	public title: string="projet2";
	public displayTitle: string="projet2";
	public status: boolean =true;
	public texts: Array<string>=['un','deux','trois'];
	public inverseStatus(): void
	{
		this.status=!this.status;
	}
  constructor() { }

  ngOnInit() {
  }

}
