package bladuels.exceptions;

@SuppressWarnings("serial")
public class ValueInvalidException extends RuntimeException {
	public ValueInvalidException(String msg) {
		super("[EXCEPTION] "+msg);
	}
}
