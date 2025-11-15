import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesTable } from './courses-table';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CoursesRoutingModule } from '../courses-routing-module';
import { SharedModule } from '../../../../shared/shared-module';

describe('CoursesTable Component', () => {
  let component: CoursesTable;
  let fixture: ComponentFixture<CoursesTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursesTable],
      imports: [CommonModule, CoursesRoutingModule, SharedModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({}),
            snapshot: {
              params: {
                get: () => null
              },
            },
          },
        },
        provideHttpClient(withFetch()),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should have a table element', () => {
    const table = fixture.nativeElement.querySelector('table');
    expect(table).toBeTruthy();
  });

  it( 'should more than 0 rows in the table body', () => {
    const rows = fixture.nativeElement.querySelectorAll('td');
    expect(rows.length).toBeGreaterThan(0);
  });
});
