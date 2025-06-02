const assert = require('assert')

describe('Component Tests', () => {
  describe('PasswordComponent', () => {
    let comp;
    let service;

    test('should show error if passwords do not match', () => {
      // GIVEN
      comp.password = 'password1';
      comp.confirmPassword = 'password2';

      // WHEN
      comp.changePassword();

      // THEN
      expect(comp.doNotMatch).toBe('ERROR');
      expect(comp.error).toBeNull();
      expect(comp.success).toBeNull();
    });

    test('should call Auth.changePassword when passwords match', () => {
      // GIVEN
      comp.password = comp.confirmPassword = 'myPassword';

      // WHEN
      comp.changePassword();

      // THEN
      expect(service.save).toHaveBeenCalledWith('myPassword');
    });

    test('should set success to OK upon success', () => {
      // GIVEN
      comp.password = comp.confirmPassword = 'myPassword';

      // WHEN
      comp.changePassword();

      // THEN
      expect(comp.doNotMatch).toBeNull();
      expect(comp.error).toBeNull();
      expect(comp.success).toBe('OK');
    });

    test('should notify of error if change password fails', () => {
      // GIVEN
      comp.password = comp.confirmPassword = 'myPassword';

      // WHEN
      comp.changePassword();

      // THEN
      expect(comp.doNotMatch).toBeNull();
      expect(comp.success).toBeNull();
      expect(comp.error).toBe('ERROR');
    });
  });
});
