export interface IWorkout {
    workoutId: number,
    shortDescription: string,
    title: string,
    workoutItems: IWorkoutItem[],
    warmupDescription: string | null,
    cooldownDescription: string | null,
    warmupExercises: IExercise[] | null,
    cooldownExercises: IExercise[] | null,
    order: number,
    trackName: string
}

export interface IWorkoutItem {
    workoutItemId: number,
    name: string,
    info: string,
    position: number,
    selectedExercises: IExercise[],
}

export interface IExercise {
    exerciseId: number | string,
    name: string,
    videoId?: string | '',
}