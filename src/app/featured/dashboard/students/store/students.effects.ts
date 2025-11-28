import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { StudentsService } from "../../../../core/services/students/students";
import { StudentsActions } from "./students.actions";
import { catchError, concatMap, delay, map } from "rxjs";


@Injectable()
export class StudentsEffects {
    constructor(private studentsService: StudentsService, private actions$: Actions) {
        this.actions$ = inject(Actions);
    }

    loadStudents$ = createEffect(() => {
        return this.actions$.pipe (
            ofType(StudentsActions.loadStudents),
            concatMap(() =>
                this.studentsService.getStudentsForEffects().pipe(
                    delay(500),
                    map((students) => StudentsActions.loadStudentsSuccess({ students })),
                    catchError((error) => [StudentsActions.loadStudentsFailure({ error })])
                )
                
            )
        )

    });
    
}

