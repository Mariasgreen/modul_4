import { validateCVV, validateCardDate, validateCardNumber, validateCardHolder} from './valid.js'




describe('Проверка держателя карты', () => {
    it('должен проверять строку из двух слов, разделенных пробелами и состоящую только из латинских букв', () => {
        expect(validateCardHolder('John Doe')).toBe(true);
    });

    it('Проверка держателя карты одним словом !ошибка', () => {
        expect(validateCardHolder('John')).toBe(false);
    });

    it('Проверка держателя карты с кириллическими символами !ошибка', () => {
        expect(validateCardHolder('Иван Иванов')).toBe(false);
    });

    it('Проверка держателя карты с числами !ошибка', () => {
        expect(validateCardHolder('John123 Doe456')).toBe(false);
    });
});

describe('Проверка номера карты', () => {
    it('Проверка номера карты только числовые символы', () => {
        expect(validateCardNumber('1234567890123456')).toBe(true);
    });

    it('Проверка номера карты с кириллическими символами !ошибка', () => {
        expect(validateCardNumber('12345678абвгде')).toBe(false);
    });

    it('Проверка номера карты со знаками препинания !ошибка', () => {
        expect(validateCardNumber('1234-5678-9012-3456')).toBe(false);

    });
    it('должен вернуть false для номера карты с больше чем 16-ю числовыми символами', () => {
        expect(validateCardNumber('12345678901234567890')).toBe(false);
      });
      it('должен вернуть false для номера карты с меньше чем 16-ю числовыми символами', () => {
        expect(validateCardNumber('12345678901234')).toBe(false);
      });
    
});

describe('Проверка даты карты', () => {
    it('Проверка даты карты в формате "ММ/ГГ" и только числовые символы', () => {
        expect(validateCardDate('12/24')).toBe(true);
    });

    it('Проверка даты карты с недопустимым форматом !ошибка', () => {
        expect(validateCardDate('12-24')).toBe(false);
    });

    it('Проверка даты карты с нечисловыми символами !ошибка', () => {
        expect(validateCardDate('12/ab')).toBe(false);
    });
});

describe('Проверка CVV/CVC', () => {
    it('Проверка CVV/CVC с тремя цифрами ', () => {
        expect(validateCVV('123')).toBe(true);
    });

    it('Проверка CVV/CVC с одним числовым символом !ошибка', () => {
        expect(validateCVV('1')).toBe(false);
    });

    it(' Проверка CVV/CVC с пятью цифрами !ошибка', () => {
        expect(validateCVV('12345')).toBe(false);
    });

    it(' Проверка CVV/CVC с нечисловыми символами !ошибка', () => {
        expect(validateCVV('12a')).toBe(false);
    });
});
