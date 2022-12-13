Feature: Create a new course
  In order to have courses in the platform
  As a user with admin permissions
  I want to create a new course

  Scenario: A valid non existing course
    Given I send a PUT request to "/courses/eb89710e-1ce8-4e2d-9a01-705a263766b8" with body:
    """
    {
      "id": "eb89710e-1ce8-4e2d-9a01-705a263766b8",
      "name": "The best course",
      "duration": "5 hours"
    }
    """
    Then the response status code should be 201
    And the response should be empty

  Scenario: An ivalid non existing course
    Given I send a PUT request to "/courses/eb89710e-1ce8-4e2d-9a01-705a263766b8" with body:
    """
    {
      "id": "eb89710e-1ce8-4e2d-9a01-705a263766b8",
      "name": 7,
      "duration": "5 hours"
    }
    """
    Then the response status code should be 422
    