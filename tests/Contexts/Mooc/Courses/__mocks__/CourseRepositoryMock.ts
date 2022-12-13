import { Course } from '../../../../../src/Contexts/Mooc/Courses/domain/Course';
import { CourseRepository } from '../../../../../src/Contexts/Mooc/Courses/domain/CourseRepository';

export class CourseRepositoryMock implements CourseRepository {
  private saveMock = jest.fn();

  constructor() {
    this.saveMock = jest.fn();
  }

  async save(course: Course): Promise<void> {
    this.saveMock(course);
  }

  assertSaveHaveBeenCalledWith(expected: Course): void {
    expect(this.saveMock).toHaveBeenCalledWith(expected);
  }
  
  /*assertLastSavedCourseIs(expected: Course): void {
    const mock = this.saveMock.mock;
    const lastSavedCourse = mock.calls[mock.calls.length - 1][0] as Course;
    expect(lastSavedCourse).toBeInstanceOf(Course);
    expect(lastSavedCourse.id).toEqual(expected.id);
  }*/

}
