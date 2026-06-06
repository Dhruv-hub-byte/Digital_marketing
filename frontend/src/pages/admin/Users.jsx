import { useEffect, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import api from "../../services/api";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => { fetchUsers(); }, []);

  const fetchUsers = async () => {
    try {
      const res = await api.get("/admin/users");
      setUsers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const roleColor = (role) => role === "admin" ? "accent" : "info";

  return (
    <div className="dm-layout">
      <AdminSidebar />
      <div className="dm-main">
        <div className="dm-page">
          <div className="dm-page-header">
            <div>
              <div className="dm-page-title">User Management</div>
              <div className="dm-page-subtitle">Manage platform users and permissions</div>
            </div>
            <span className="dm-badge info">{users.length} Users</span>
          </div>

          <div className="dm-card">
            <div className="dm-card-header">
              <span className="dm-card-title">👥 All Users</span>
            </div>
            <div className="dm-table-wrap">
              <table className="dm-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                  </tr>
                </thead>
                <tbody>
                  {users.length === 0 ? (
                    <tr>
                      <td colSpan={4}>
                        <div className="dm-empty">
                          <div className="dm-empty-icon">👥</div>
                          <p>No users found</p>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    users.map((user) => (
                      <tr key={user.id}>
                        <td style={{ color: "var(--text-muted)" }}>#{user.id}</td>
                        <td><strong>{user.name}</strong></td>
                        <td>{user.email}</td>
                        <td>
                          <span className={`dm-badge ${roleColor(user.role)}`}>
                            {user.role}
                          </span>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;