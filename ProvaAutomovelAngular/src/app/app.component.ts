import { Component, OnInit} from '@angular/core';
import { AutomovelService } from './services/automovel.service';
import { Automovel } from "./models/automovel";

@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
  styleUrls: []
})
export class AppComponent implements OnInit {
  automoveis: Automovel[] = [];

    constructor(private service: AutomovelService) {}

    ngOnInit(): void {
        this.service.list().subscribe((automoveis) => {
            this.automoveis = automoveis;
            for (let automovel of automoveis) {
                console.log(automovel);
            }
        });
    }
}
