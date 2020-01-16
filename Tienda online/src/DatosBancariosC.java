import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;
import java.util.*;

public class DatosBancariosC extends HttpServlet {

	public void doGet(HttpServletRequest peticion, HttpServletResponse respuesta) throws ServletException, IOException {

		HttpSession misesion;
		PrintWriter salida = respuesta.getWriter();
		int idCerveza;
		ArrayList<Integer> lista;

		misesion = peticion.getSession(true);

		salida.println("<!DOCTYPE html>"); // HTML 5
		salida.println("<html><head>");
		salida.println("<meta http-equiv='Content-Type' content='text/html; charset=UTF-8'>");
		salida.println("<title> LISTADO </title></head>");
		salida.println(
				"<link rel=\"stylesheet\" type=\"text/css\" href=\"//fonts.googleapis.com/css?family=Mate+SC\" />");
		salida.println(
				"<link rel=\"stylesheet\" href=\"" + peticion.getContextPath() + "/css/style.css\" type=\"text/css\">");

		salida.println("<body>");
		salida.println("<header>");
		salida.println("<h1>DATOS CLIENTE</h1>");
		salida.println("</header");
		salida.println("<div>");

		salida.println("<form action='/confirmacion'>");
		salida.println("<label for='nombre'>NOMBRE:</label>");
		salida.println("<input type='text' name='nombre'>");
		salida.println("<label for='apellidos'>APELLIDOS:</label>");
		salida.println("<input type='text' name='apellidos'>");
		salida.println("<input type='text' name='tarjeta'>");
		salida.println("<label for='tarjeta'>TARJETA:</label>");
		salida.println("<input type='submit' value='CONFIRMAR PEDIDO'>");
		salida.println("</form>");

		salida.println("</div>");

		salida.println("<div class=\"debug\"");
		salida.println(misesion.toString());
		salida.println("</div>");

		// salida.println("<script
		// src=\""+peticion.getContextPath()+"/js/gestion.js\"></script>");
		salida.println("</body></html>");

	}
}
