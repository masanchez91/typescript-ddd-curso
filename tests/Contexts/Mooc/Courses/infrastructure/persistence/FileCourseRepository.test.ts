import { Course } from '../../../../../../src/Contexts/Mooc/Courses/domain/Course';
import { FileCourseRepository } from '../../../../../../src/Contexts/Mooc/Courses/infrastructure/persistence/FileCourseRepository';

const COURSE = {
    'id': 'id',
    'name': 'name',
    'duration': 'duration',
};

describe("FileCourseRepository", () => {
    it('should save a course', async () => {
        const expectedCourse = new Course(COURSE);
        const repository = new FileCourseRepository();

        await repository.save(expectedCourse);

        const course = await repository.search('id');
        expect(course).toEqual(expectedCourse);
    })
});