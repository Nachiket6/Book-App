import { Sidebar } from 'flowbite-react';
import { HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiTable } from 'react-icons/hi';
 import userImg from "../assets/profile.jpg"
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import { useContext, useState } from 'react';
const SideBar = () => {
  const {signOut} = useContext(AuthContext);
    const [error, setError] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from.pathname || '/';
    const handleLogout = () => {
        signOut().then(() => {
            alert('Logout successful');
            navigate(from, { replace: true });
        })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage)
            })
    }
  return (
    <Sidebar aria-label="Sidebar with content separator example">
         <Sidebar.Logo href="#" img={userImg} imgAlt="Flowbite logo">
        Flowbite
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
            Upload Book
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
            Manage Books
          </Sidebar.Item>
          <Sidebar.Item href="/shop" icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
          <Sidebar.Item href="/" icon={HiTable} onClick={handleLogout}>
            Log Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}

export default SideBar