import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {
    getAllCourses():string{
        return 'Get All Courses - from Service';
    }

    getCourseById(id: string){
        return `Get Course with ${id} - from Service`;
    }

    createCourse():string{
        return 'Create Course - from Service';
    }

    updateCourse(id: string){
        return `Update course ${id} - from service`;
    }

    patchCourse(id: string){
        return `Patch Course ${id} - from Service`;
    }

    deleteCourse(id: string){
        return `Delete Course ${id} - from Service`;
    }

}
