using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data.SqlClient;
using System.Configuration;

namespace SPI.Data.Class
{
    public class DBConnection : IDisposable
    {
        #region -- Properties --

        /// <summary>
        /// Objeto connection responsavel por manter a comunicação com a base de dados.
        /// </summary>
        public SqlConnection context = null;

        #endregion

        #region -- Methods --

        /// <summary>
        /// Construtor da classe.
        /// </summary>
        public DBConnection()
        {
            try
            {
                String connectionString = ConfigurationManager.ConnectionStrings[ConfigurationManager.ConnectionStrings["Connection"].ToString()].ToString();
                context = new SqlConnection(connectionString);
                context.Open();
            }
            catch (Exception ex)
            {
                throw new Exception(String.Format("Falha ao acessar base de dados: ", ex));
            }
        }

        /// <summary>
        /// Fecha as conexões ociosas com o banco e destroe os objetos não utilziados.
        /// </summary>
        void IDisposable.Dispose()
        {
            context.Close();
            context.Dispose();
        }

        #endregion
    }
}
