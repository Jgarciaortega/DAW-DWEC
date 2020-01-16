import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;
import java.util.*;

public class DetallesC extends HttpServlet {

    public void doGet(HttpServletRequest peticion, HttpServletResponse respuesta) throws ServletException, IOException {
        
	HttpSession misesion;
    PrintWriter salida = respuesta.getWriter();

	salida.println("<!DOCTYPE html>");  // HTML 5
    salida.println("<html><head>");
    salida.println("<meta http-equiv='Content-Type' content='text/html; charset=UTF-8'>");
	salida.println("<title> DETALLES </title></head>");

	salida.println("<link rel=\"stylesheet\" type=\"text/css\" href=\"//fonts.googleapis.com/css?family=Mate+SC\" />");
	salida.println("<link rel=\"stylesheet\" href=\""+peticion.getContextPath()+"/css/style.css\" type=\"text/css\">");
    salida.println("<body>");
	salida.println("<header>");
    salida.println("<h1> GRACIAS POR SU COMPRA </h1>");  // Prints "Hello, world!"
	salida.println("<a class=\"enlaceDetalles\" href=\"listado\"> Seguir Comprando </a>");
	salida.println("</header");

	try{
	    Class.forName("com.mysql.jdbc.Driver");
	    Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/cervezas", "tomcat", "tomcat");
        PreparedStatement pst = conn.prepareStatement("Select * from unidades;");
	    ResultSet rs = pst.executeQuery();

	    
	    }catch(ClassNotFoundException | SQLException e){
	    salida.println(e.toString());
	    }

	salida.println("</body></html>"); 

    }
}
