import { Component } from '@angular/core';
import { Donor } from '../models/donor.model';
import { DonorsService } from '../services/donors.service';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-donors-list',
  templateUrl: './donors-list.component.html',
  styleUrls: ['./donors-list.component.css'],
  providers: [ConfirmationService, MessageService]

})
export class DonorsListComponent {

}
