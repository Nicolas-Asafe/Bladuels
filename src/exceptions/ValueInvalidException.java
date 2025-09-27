package exceptions;

public class ValueInvalidException extends RuntimeException {
	public ValueInvalidException(String msg) {
		super("[EXCEPTION] "+msg);
	}
}
