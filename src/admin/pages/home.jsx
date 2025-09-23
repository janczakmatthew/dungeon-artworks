  import { fetchFromTable } from '../utils/supabaseQuery';

  import TitleSection from '../components/titlesection';
  import Card from '../components/card';

  import { useEffect, useState } from "react"
  import { LuUser as User, LuTags as Tags, LuShoppingCart as Orders, LuLink as Links} from "react-icons/lu"

  function AdminHome() {

    const [stats, setStats] = useState({
      users: 0,
      products: 0,
      categories: 0,
    })

    useEffect(() => {
    async function getStats() {
      // Fetch counts from Supabase tables
      const users = await fetchFromTable({ table: 'profiles', columns: 'id, is_admin, is_owner, is_active' });
      const products = await fetchFromTable({ table: 'products', columns: '*' });
      const orders = await fetchFromTable({ table: 'orders', columns: '*' });

      // Process counts
      const total_users = users?.length || 0;
      const total_admin = users?.filter(u => u.is_admin === true)?.length || 0;
      const active_users = users?.filter(u => u.is_active) ?.length || 0;
      const inactive_users = total_users - active_users;

      const total_products = products?.length || 0;
      const digital_products = products?.filter(p => p.type === 'digital')?.length || 0;
      const physical_products = products?.filter(p => p.type === 'physical')?.length || 0;

      const total_orders = orders?.length || 0;
      const weekly_orders = orders?.filter(o => {
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
        return new Date(o.created_at) >= oneWeekAgo;
      })?.length || 0;
      const pending_orders = orders?.filter(o => o.status === 'pending')?.length || 0;

      setStats({
        total_users,
        total_admin,
        active_users,
        inactive_users,
        total_products,
        digital_products,
        physical_products,
        total_orders,
        weekly_orders,
        pending_orders,
      });
    }

    getStats();
  }, []);


    return (
      <div className="admin-home">
        <TitleSection title="Dungeon Artworks Dashboard" subtitle="Manage your application settings and data" />
        <div className="content p-4">
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <Card title="Users" icon={User}  value={[
              {label: 'Total', value: stats.total_users},
              {label: 'Admin', value: stats.total_admin},
              {label: 'Active', value: stats.active_users},
              {label: 'Inactive', value: stats.inactive_users},
            ]} /> 
            <Card title="Products" icon={Tags} value={[
              {label: 'Total', value: stats.total_products},
              {label: 'Digital', value: stats.digital_products},
              {label: 'Physical', value: stats.physical_products},
            ]} />
            <Card title="Orders" icon={Orders} value={[
              {label: 'Total', value: stats.total_orders},
              {label: 'This week', value: stats.weekly_orders},
              {label: 'Pending', value: stats.pending_orders},
            ]} />
            <Card title="Quick Links" icon={Links} value={[
              {label: 'Manage Users', value: 'Go to Users', link: '/admin/users'},
              {label: 'Manage Products', value: 'Go to Products', link: '/admin/products'},
              {label: 'Manage Orders', value: 'Go to Orders', link: '/admin/orders'},
            ]} card_container_classes="" />
          </div>
        </div>
      </div>
    );
  }

  export default AdminHome;