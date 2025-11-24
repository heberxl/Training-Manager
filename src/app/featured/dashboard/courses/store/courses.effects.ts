import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CoursesService } from "../../../../core/services/courses/courses";
import { CoursesActions } from "./courses.actions";
import { catchError, concatMap, delay, map } from "rxjs";

@Injectable()
export class CoursesEffects {
    constructor(private coursesService: CoursesService, private actions$: Actions) {
        this.actions$ = inject(Actions);
    }

    loadCourses$ = createEffect(() => {
        return this.actions$.pipe (
            ofType(CoursesActions.loadCourses),
            concatMap(() =>
                this.coursesService.getCoursesForEffects().pipe(
                    delay(500),
                    map((courses) => CoursesActions.loadCoursesSuccess({ courses })),
                    catchError((error) => [CoursesActions.loadCoursesFailure({ error })])
                )
                
            )
        )

    });
    
}

